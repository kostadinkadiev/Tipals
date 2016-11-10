﻿using System;
using System.Threading.Tasks;
using Tipals.Core.Domain;
using Tipals.Core.Ioc;

namespace Tipals.Core.Dispatcher
{
    public class EventPublisher : IEventPublisher
    {
        private readonly IResolver _resolver;

        public EventPublisher(IResolver resolver)
        {
            _resolver = resolver;
        }

        public void Publish<TEvent>(TEvent @event) where TEvent : IEvent
        {
            if (@event == null)
                throw new ArgumentNullException(nameof(@event));

            var eventHandlers = _resolver.ResolveAll<IEventHandler<TEvent>>();

            foreach (var handler in eventHandlers)
                Task.Run(() => handler.Handle(@event));
        }
    }
}
