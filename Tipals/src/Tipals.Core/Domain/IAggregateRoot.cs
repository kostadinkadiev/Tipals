using System;
using System.Collections.Generic;

namespace Tipals.Core.Domain
{
    public interface IAggregateRoot
    {
        Guid Id { get; }
        ICollection<IEvent> Events { get; }
    }
}
