#1
def hello_name(name):
    return "Hello " + name + "!"
#2
def make_abba(a, b):
    return a + b + b + a
#3
def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"
#4
def make_out_word(out, word):
    return out[:2] + word + out[2:]
#5
def extra_end(str):
    return str[-2:] * 3
#6
def first_two(str):
    return str[:2]
