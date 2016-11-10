using System;

namespace Tipals.Core.Domain
{
    public interface IEvent
    {
        Guid AggregateRootId { get; set; }
        DateTime TimeStamp { get; }
    }
}
