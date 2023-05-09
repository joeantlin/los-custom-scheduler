using System;

namespace LucidOwlSchedulerAPI.Models
{
	public class Character
	{

		public int Id { get; set; }
		public string Name { get; set; } = string.Empty;
		public int HitPoints { get; set; } = 100;
		public int strength { get; set; } = 10;
		public int Defense { get; set; } = 10;
		public int Intelligence { get; set; } = 10;
		public PriceType PriceType { get; set; } = PriceType.SetAmount;
		public User? User { get; set; }
	}
}

