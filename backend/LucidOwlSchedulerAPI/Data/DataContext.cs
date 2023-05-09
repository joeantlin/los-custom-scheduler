global using Microsoft.EntityFrameworkCore;

namespace LucidOwlSchedulerAPI.Data
{
	public class DataContext : DbContext
	{
        public DataContext() { }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=localhost;Database=LOSScheduler;Trusted_Connection=true;TrustServerCertificate=true;Integrated Security=false;User=sa; Password=Bwabwa11");
        }

        public DbSet<SuperHero> SuperHero => Set<SuperHero>();
        public DbSet<Character> Character => Set<Character>();
        public DbSet<User> User => Set<User>();

    }
}

