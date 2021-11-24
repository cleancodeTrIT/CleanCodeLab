string printOnlyOddNumbers(int[] numbers)
{
	List<int> n = new List<int>() { };
	List<int> rev = new List<int>() { };
	foreach (var number in numbers)
	{
		if (number % 2 == 1)
		{
			n.Add(number);
		}
	}
	for (int i = n.Count - 1; i >= 0; i--)
	{
		rev.Add(n.ElementAt(i));
	}
	StringBuilder sb = new StringBuilder();
	for (int i = 0; i < rev.Count; i++)
	{
		sb.Append(rev.ElementAt(i));
	}
	return sb.ToString();
}