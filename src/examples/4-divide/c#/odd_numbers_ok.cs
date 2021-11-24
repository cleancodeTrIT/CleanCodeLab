string storeOddNumbersInAReversedString(int[] numbers)
{
	List<int> oddNumbers = new List<int>() { };
	List<int> reversedList = new List<int>() { };
  String reversedNumbers = "";

  oddNumbers = getOnlyOddNumbers(numbers);
	reversedList = reverseNumbers(oddNumbers);
  reversedNumbers = storeListInString(reversedList);

	return reversedNumbers;
}

List<int> getOnlyOddNumbers(int[] numbers)
{
  List<int> oddNumbers = new List<int>() { };
	foreach (var number in numbers)
	{
		if (number % 2 == 1)
		{
			oddNumbers.Add(number);
		}
	}
  return oddNumbers;
}

List<int> reverseNumbers(List<int> numbers)
{
  List<int> reversedList = new List<int>() { };
	for (int i = numbers.Count - 1; i >= 0; i--)
	{
		reversedList.Add(n.ElementAt(i));
	}
  return reversedList;
}

string storeListInString(List<int> numbers)
{
	StringBuilder sb = new StringBuilder();
	for (int i = 0; i < numbers.Count; i++)
	{
		sb.Append(numbers.ElementAt(i));
	}
	return sb.ToString();
}