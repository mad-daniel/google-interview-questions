class vertex_mst {
  constructor(id, visited) {
    this.id = id;
    this.visited = visited;
  }
}

class edge_mst {
  constructor(weight, visited, src, dest) {
    this.weight = weight;
    this.visited = visited;
    this.src = src;
    this.dest = dest;
  }
}

class graph_mst {
  constructor(g, e) {
    this.g = g;
    this.e = e;
  }

  vertex_exists(id) {
    for (let i = 0; i < this.g.length; i++) {
      if (this.g[i].id === id) {
        return this.g[i];
      }
    }
    return null;
  }

  generate_graph(vertices, edges) {
    for (let i = 0; i < vertices; i++) {
      let v = new vertex_mst(i + 1, false);
      this.g.push(v);
    }

    for (let i = 0; i < edges.length; i++) {
      let src = this.vertex_exists(edges[i][1]);
      let dest = this.vertex_exists(edges[i][2]);
      let e = new edge_mst(edges[i][0], false, src, dest);
      this.e.push(e);
    }
  }

  find_min_spanning_tree() {  
    let weight = -1;
    return weight;   
  }

  print_graph() {
    for (let i = 0; i < this.g.length; i++) {
      console.log(this.g[i].id + " " + this.g[i].visited);
    }

    for (let i = 0; i < this.e.length; i++) {
      console.log(this.e[i].src.id + "->" +
                  this.e[i].dest.id + "[" +
                  this.e[i].weight + ", " +
                  this.e[i].visited + "]  ");
    }
  }

  get_graph() {
    res = ""
    for (let i = 0; i < this.e.length; i++) {
      res += "[" + this.e[i].src.id + "->" +
                  this.e[i].dest.id + "], ";
    }
    return res;
  }
  
  print_mst(w) {
    console.log("MST");
    for (let i = 0; i < this.e.length; i++) {
      if (this.e[i].visited === true) {
        console.log(this.e[i].src.id + "->" + this.e[i].dest.id);
      }
    }
    console.log("weight: " + w);
  }
}
