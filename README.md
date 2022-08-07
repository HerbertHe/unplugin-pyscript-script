# unplugin-pyscript-script

`unplugin-pyscript-script` is the plugin for [PyScript](https://pyscript.net/) script importing. When you are using PyScript with Vite, Webpack, Rollup..., it would be useful.

About PyScript, see [PyScript](https://pyscript.net/).

## Usage

About how to use the plugin for Vite, Webpack, Rollup..., see [UnPlugin](https://github.com/unjs/unplugin)

### Write your PyScript code to file with `.script.py` suffix

```python
print("Let's compute π:")
def compute_pi(n):
    pi = 2
    for i in range(1,n):
        pi *= 4 * i ** 2 / (4 * i ** 2 - 1)
    return pi

pi = compute_pi(100000)
s = f"π is approximately {pi:.3f}"
print(s)
```

- `<py-script output="output-id"></py-script>`

```python
# output= "output-id"

import matplotlib.pyplot as plt
import numpy as np

x = np.random.randn(1000)
y = np.random.randn(1000)

fig, ax = plt.subplots()
ax.scatter(x, y)
fig
```

### Import your `.script.py` file to js

```js
import { script } from "./xxx.script.py"
```
