import sys

file_path = './src/config/env.ts'
with open(file_path) as fp:
    file = fp.read()
file = file.replace('process.env.REACT_APP_GATEWAY_URL', f'"{sys.argv[1]}"')
with open(file_path, 'w') as fp:
    fp.write(file)
