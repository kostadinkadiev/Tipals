using Microsoft.Extensions.Caching.Memory;
using System;

namespace Tipals.Core.Cache
{
    public class CacheManager : ICacheManager
    {
        readonly IMemoryCache _memoryCache;

        public CacheManager(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public T Get<T>(string key)
        {
            return (T)_memoryCache.Get(key);
        }

        public void Set(string key, object data, int cacheTimeInSeconds)
        {
            if (data == null)
                return;

            if (IsSet(key))
                return;

            _memoryCache.Set(key, data, 
                new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromSeconds(cacheTimeInSeconds)));
        }

        public bool IsSet(string key)
        {
            return _memoryCache.Get(key) != null;
        }

        public void Remove(string key)
        {
            _memoryCache.Remove(key);

        }
    }
}
