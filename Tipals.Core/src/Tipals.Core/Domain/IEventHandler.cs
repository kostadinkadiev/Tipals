using System.Threading.Tasks;

namespace Tipals.Core.Domain
{
    public interface IEventHandler<in TEvent> where TEvent : IEvent
    {
        Task Handle(TEvent @event);
    }
}
