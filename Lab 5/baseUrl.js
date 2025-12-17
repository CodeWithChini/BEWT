const baseUrl = new URL('https://info.example.com');

baseUrl.pathname = '/path/to/recourse'
baseUrl.searchParams.append('Name', 'Hill')
baseUrl.searchParams.append('rollno', '369')

console.log(baseUrl.toString());
