using System;
using System.Threading.Tasks;
using Tipals.Core.Domain;
using Tipals.Core.Ioc;

namespace Tipals.Core.Dispatcher
{
    public class QueryExecutor : IQueryExecutor
    {
        private readonly IResolver _resolver;
        private readonly IEventPublisher _eventPublisher;
        private readonly IEventStore _eventStore;

        public QueryExecutor(IResolver resolver,
            IEventPublisher eventPublisher,
            IEventStore eventStore)
        {
            _resolver = resolver;
            _eventPublisher = eventPublisher;
            _eventStore = eventStore;
        }

        public Task<TResult> Execute<TQuery, TResult>(TQuery query) where TQuery : IQuery
        {
            if (query == null)
                throw new ArgumentNullException(nameof(query));

            var queryHandler = _resolver.Resolve<IQueryHandler<TQuery, TResult>>();

            if (queryHandler == null)
                throw new Exception($"No handler found for query '{queryHandler.GetType().FullName}'");

            var queryResult = queryHandler.Retrieve(query);
            return queryResult;
        }
    }
}
