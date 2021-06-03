package com.willembergson.oBalaio.controller;

import com.willembergson.oBalaio.dto.ProdutoDTO;
import com.willembergson.oBalaio.entity.ListaProdutos;
import com.willembergson.oBalaio.entity.Produto;
import com.willembergson.oBalaio.services.ListaProdutosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pedidos")
public class ListaProdutosController {

    private ListaProdutosService service;

    @Autowired
    public ListaProdutosController(ListaProdutosService service){
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduto(@RequestBody ListaProdutos listaProdutos){
        service.create(listaProdutos);
    }

    @GetMapping("/listAll")
    public List<ListaProdutos> findAll(){
        return service.findAll();
    }
}
