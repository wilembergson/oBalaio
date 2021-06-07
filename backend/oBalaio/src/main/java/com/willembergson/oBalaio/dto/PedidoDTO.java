package com.willembergson.oBalaio.dto;

import com.willembergson.oBalaio.entity.Pedido;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@AllArgsConstructor
public class PedidoDTO {

    private Long id;

    @NotEmpty
    private Object[] itens;

    @NotEmpty
    private Double total;

    public PedidoDTO(){}

    public  PedidoDTO(Pedido pedido){
        id = pedido.getId();
        itens = pedido.getItens();
        total = pedido.getTotal();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Object[] getItens() {
        return itens;
    }

    public void setItens(Object[] itens) {
        this.itens = itens;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}
