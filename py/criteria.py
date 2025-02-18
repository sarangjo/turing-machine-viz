from typing import List

import numpy as np


Cubes = List[np.ndarray[bool]]


# 0-based indexing, 1-based numbers
ONE = 0
TWO = 1
THREE = 2
FOUR = 3
FIVE = 4

x, y, z = np.indices((5, 5, 5))


def card1() -> Cubes:
    """
    Card1: =1, >1
    """
    return [x == ONE, x > ONE]


def card2() -> Cubes:
    """
    Card2: >3, =3, <3
    """
    return [x > THREE, x == THREE, x < THREE]
