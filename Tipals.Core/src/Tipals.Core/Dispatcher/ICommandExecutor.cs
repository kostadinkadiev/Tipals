using Tipals.Core.Domain;

namespace Tipals.Core.Dispatcher
{
    public interface ICommandExecutor
    {
        void Execute<TCommand, TAggregate>(TCommand command, bool publishEvents = true)
            where TCommand : ICommand
            where TAggregate : IAggregateRoot;
    }
}
