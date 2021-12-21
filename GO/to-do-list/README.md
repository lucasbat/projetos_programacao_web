<img src="https://duckduckgo.com/i/0330f6cf.png" alt="Logo Go" height="80"></img>


Run: go run main.go

Test (Terminal): curl http://localhost:9091/todo



<img src="gif.gif" alt="Gif funcionamento" height="500"></img>



ServeMux
HTTP request multiplexer: Matches the URL of each incoming request against a list of registered patterns and calls the handler.



Basic Sintaxe:
    {{ .Title }}
    {{ if .Done }}  .. {{ end }}
    {{ range .Items }}  {{.item}} .. {{ end }}