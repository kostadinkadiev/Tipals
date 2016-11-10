using AutoMapper;
using System;

namespace Tipals.Core.Dispatcher
{
    public static class EventFactory
    {
        public static dynamic CreateConcreteEvent(object @event)
        {
            Type type = @event.GetType();
            var config = new MapperConfiguration(cfg => { cfg.CreateMap(type, type); });

            dynamic result = config.CreateMapper().Map(@event, type, type);
            return result;
        }
    }
}
