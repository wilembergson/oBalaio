package com.willembergson.oBalaio.controller;

import com.willembergson.oBalaio.entity.Pedido;
import com.willembergson.oBalaio.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    private PedidoService service;

    @Autowired
    public PedidoController(PedidoService service){
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createPedido(@RequestBody Pedido pedido){
        service.create(pedido);
    }

    @GetMapping("/listAll")
    public List<Pedido> findAll(){
        return service.findAll();
    }
}
