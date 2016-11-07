using System.Collections.Generic;

namespace Tipals.Core.Domain
{
    public interface ICommandHandler<in TCommand> where TCommand : ICommand
    {
        ICollection<IEvent> Handle(TCommand command);
    }
}
