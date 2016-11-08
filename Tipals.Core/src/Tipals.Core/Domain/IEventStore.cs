using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Tipals.Core.Domain
{
    public interface IEventStore
    {
        void SaveEvent<TAggregate>(IEvent @event) where TAggregate : IAggregateRoot;
        Task<IEnumerable<IEvent>> GetEvents(Guid aggregateId);
    }
}
