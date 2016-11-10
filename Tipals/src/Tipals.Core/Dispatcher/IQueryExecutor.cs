using System.Threading.Tasks;
using Tipals.Core.Domain;

namespace Tipals.Core.Dispatcher
{
    public interface IQueryExecutor
    {
        Task<TResult> Execute<TQuery, TResult>(TQuery query)
            where TQuery : IQuery;
    }
}
