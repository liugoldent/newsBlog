def lengthOfLastWord(s):
    """
    :type s: str
    :rtype: int
    """
    s = s.strip().split(' ')
    return len(s[len(s) - 1])

a = lengthOfLastWord('Hello world   ')
print(a)
