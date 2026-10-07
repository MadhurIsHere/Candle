package com.lumiere.api.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String slug;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    private String imageUrl;
    
    private String collectionName;
    
    private String fragranceNotes;

    // Attributes like size, color, wick count could be mapped in a separate entity for complex variations
    // For now, we'll store basic stock status
    private boolean inStock = true;
}
