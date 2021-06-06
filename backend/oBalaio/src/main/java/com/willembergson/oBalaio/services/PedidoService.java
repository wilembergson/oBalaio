package com.willembergson.oBalaio.services;

import com.willembergson.oBalaio.entity.Pedido;
import com.willembergson.oBalaio.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PedidoService {

    private final PedidoRepository repository;

    @Autowired
    public PedidoService(PedidoRepository repository){
        this.repository = repository;
    }

    public void create(Pedido pedido){
        repository.save(pedido);
    }

    public List<Pedido> findAll(){
        List<Pedido> list = repository.findAll();
        return list.stream().map(x -> new Pedido(x.getItens(), x.getTotal())).collect(Collectors.toList());
    }
}
