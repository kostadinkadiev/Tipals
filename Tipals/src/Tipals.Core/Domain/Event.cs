using System;

namespace Tipals.Core.Domain
{
    public class Event : IEvent
    {
        public Guid AggregateRootId { get; set; }
        public DateTime TimeStamp { get; private set; } = DateTime.UtcNow;
    }
}
