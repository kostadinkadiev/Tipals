using System;
using Tipals.Core.Domain;
using Tipals.Core.Ioc;

namespace Tipals.Core.Dispatcher
{
    public class CommandExecutor : ICommandExecutor
    {
        private readonly IResolver _resolver;
        private readonly IEventPublisher _eventPublisher;
        private readonly IEventStore _eventStore;

        public CommandExecutor(IResolver resolver,
            IEventPublisher eventPublisher,
            IEventStore eventStore)
        {
            _resolver = resolver;
            _eventPublisher = eventPublisher;
            _eventStore = eventStore;
        }

        public void Execute<TCommand, TAggregate>(TCommand command, bool publishEvents = true)
            where TCommand : ICommand
            where TAggregate : IAggregateRoot
        {
            if (command == null)
                throw new ArgumentNullException(nameof(command));

            var commandHandler = _resolver.Resolve<ICommandHandler<TCommand>>();

            if (commandHandler == null)
                throw new Exception($"No handler found for command '{command.GetType().FullName}'");

            var events = commandHandler.Handle(command);

            foreach (var @event in events)
            {
                _eventStore.SaveEvent<TAggregate>(@event);

                if (!publishEvents)
                    continue;

                var concreteEvent = EventFactory.CreateConcreteEvent(@event);

                _eventPublisher.Publish(concreteEvent);
            }
        }
    }
}
