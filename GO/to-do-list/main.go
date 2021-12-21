package main

import (
	"log"
	"net/http"
	"text/template"
)

var tmpl *template.Template

type Todo struct {
	Item string
	Done bool
}

type PageData struct {
	Title string
	Todos []Todo
}

func todo(w http.ResponseWriter, r *http.Request) {
	data := PageData{
		Title: "Tutoriais Top 30 Go",
		Todos: []Todo{
			{Item: "a Udemy", Done: true},
			{Item: "Ir por Exemplo", Done: false},
			{Item: "Ir Recursos", Done: false},
			{Item: "Ir Bootcamp", Done: false},
			{Item: "Gophercises", Done: false},
			{Item: "a Aprendizagem de Ir (miek.nl)", Done: false},
			{Item: "CosmicLearn", Done: false},
			{Item: "Safari Books Online", Done: false},
			{Item: "Tutoriais Ponto", Done: false},
			{Item: "Golangbot.com", Done: false},
			{Item: "Web Exemplos", Done: false},
			{Item: "Toptal", Done: false},
			{Item: "Casa da Árvore", Done: false},
			{Item: "Codementor", Done: false},
			{Item: "Pluralsight", Done: false},
			{Item: "ReactDOM", Done: false},
			{Item: "Hackernoon", Done: false},
			{Item: "Lynda.,com", Done: false},
			{Item: "Awesome Ir", Done: false},
			{Item: "Techgig", Done: false},
			{Item: "Golang Tutoriais", Done: false},
			{Item: "Golang Basic", Done: false},
			{Item: "Eduonix", Done: false},
			{Item: "Ardan Labs", Done: false},
			{Item: "50 Tons de Ir", Done: false},
			{Item: "Master Ir", Done: false},
			{Item: "Infoworld", Done: false},
			{Item: "Um Passeio de Ir", Done: false},
			{Item: "Golang Código", Done: false},
			{Item: "PragmaCoders", Done: false},
		},
	}

	tmpl.Execute(w, data)
}

func main() {
	mux := http.NewServeMux()
	tmpl = template.Must(template.ParseFiles("templates/index.gohtml"))

	fs := http.FileServer(http.Dir("./static"))
	mux.Handle("/static/", http.StripPrefix("/static/", fs))
	mux.HandleFunc("/todo", todo)

	log.Fatal(http.ListenAndServe(":9091", mux))
}
