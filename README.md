# Bard
**Under development**

Bard is a tool that will allow you to run your games with ease. 

## Setup
First, you're going to need to install postgres and clone this repository:

```
git clone git@github.com:kevoneil/bard.git
```

### Create an .env file
Create a `.env` file with the following environment keys:
```
export PGPORT=5432
export PGDATABASE=bard
export PGUSER=usernamme
```
You'll also need the credientals for authentication, please send me an email for more details.

### Create database
Run this command to create the database and tables that you will need for development:

```
cd bin && source create-fake-data.sh
```

### Install dependencies
Install depdencies via yarn:

```
yarn
```

### Running development servers

Finally, you will need to run the front end and back end servers:

**Backend**:
```
yarn dev:server
```

**Frontend** 
```
yarn dev:client
```

## License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
