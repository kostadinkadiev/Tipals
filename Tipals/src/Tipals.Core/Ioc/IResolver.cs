using System.Collections.Generic;

namespace Tipals.Core.Ioc
{
    public interface IResolver
    {
        T Resolve<T>();
        IEnumerable<T> ResolveAll<T>();
    }
}
