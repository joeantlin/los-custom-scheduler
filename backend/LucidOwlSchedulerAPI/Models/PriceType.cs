using System;
using System.Text.Json.Serialization;

namespace LucidOwlSchedulerAPI.Models
{
	[JsonConverter(typeof(JsonStringEnumConverter))]
	public enum PriceType
	{
		SetAmount = 1,
		PerHour = 2,
		PerUnit = 3
	}
}

