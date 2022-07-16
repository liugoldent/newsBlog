def plusOne(digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    for i in reversed(range(len(digits))):
        lastDigits = digits[i]
        if lastDigits + 1 <= 9:
            digits[i] = digits[i] + 1
            return digits
        else:
            digits[i] = 0
    digits.insert(0, 1)
    return digits
print(plusOne([1,2,3,5]))
