using System.Threading.Tasks;

namespace Tipals.Core.Domain
{
    public interface IQueryHandler<in TQuery, TResult> where TQuery : IQuery
    {
        Task<TResult> Retrieve(TQuery query);
    }
}
