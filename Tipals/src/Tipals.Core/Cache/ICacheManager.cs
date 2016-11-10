namespace Tipals.Core.Cache
{
    public interface ICacheManager
    {
        T Get<T>(string key);
        void Set(string key, object data, int cacheTimeInSeconds);
        bool IsSet(string key);
        void Remove(string key);
    }
}
