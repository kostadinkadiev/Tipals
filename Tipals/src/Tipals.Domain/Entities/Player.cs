namespace Tipals.Domain.Entities
{
    public class Player
    {
        public Player()
        {
            Points = 5000;
        }

        public int Id { get; set; }
        public int Points { get; set; }
    }
}
