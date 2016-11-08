using Tipals.Core.Domain;

namespace Tipals.Core.Dispatcher
{
    public interface IEventPublisher
    {
        void Publish<TEvent>(TEvent @event) where TEvent : IEvent;
    }
}
