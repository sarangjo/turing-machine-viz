#!/usr/bin/env python3
import matplotlib.pyplot as plt
import numpy as np

from criteria import *

"""
Inspired by (copied from): https://matplotlib.org/stable/gallery/mplot3d/voxels.html
"""


def main():
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    # Set axis limits
    ax.set_xlim([0, 7])
    ax.set_ylim([0, 7])
    ax.set_zlim([0, 7])

    # Set labels
    ax.set_xlabel('Blue')  # 🔼️')
    ax.set_ylabel('Yellow')  # ⏹')
    ax.set_zlabel('Purple')  # ⏺')

    cube1, cube2, cube3 = card2()

    voxelarray = cube1 | cube2 | cube3

    colors = np.empty(voxelarray.shape, dtype=object)
    colors[cube1] = 'blue'
    colors[cube2] = 'green'
    colors[cube3] = 'red'

    ax.voxels(voxelarray, facecolors=colors, edgecolor='k')

    plt.title('Turing Machine')
    plt.show()


if __name__ == "__main__":
    main()
