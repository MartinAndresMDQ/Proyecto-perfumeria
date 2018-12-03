import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Product, ColorFilter, TagFilter } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { trigger, transition, style, animate } from "@angular/animations";
import * as _ from 'lodash'
import * as $ from 'jquery';

@Component({
  selector: 'app-collection-right-sidebar',
  templateUrl: './collection-right-sidebar.component.html',
  styleUrls: ['./collection-right-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [  // angular animation
    trigger('Animation', [
      transition('* => fadeOut', [
        style({ opacity: 0.1 }),
        animate(1000, style({ opacity: 0.1 }))
      ]),
      transition('* => fadeIn', [
         style({ opacity: 0.1 }),
         animate(1000, style({ opacity: 0.1 }))
      ])
    ])
  ]
})
export class CollectionRightSidebarComponent implements OnInit {

  public products     :   Product[] = [];
  public items        :   Product[] = [];
  public allItems     :   Product[] = [];
  public colorFilters :   any[] = [];
  public tagsFilters  :   any[] = [];
  public sortByOrder  :   string = '';   // sorting
  public animation    :   any;   // Animation

  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of data is reached
 
   
  constructor(private route: ActivatedRoute, private router: Router,
    private productsService: ProductsService) { 
       this.route.params.subscribe(params => {
          const category = params['category'];
          this.productsService.getProductByCategory(category).subscribe(products => {
             this.allItems = products  // all products
             this.products = products.slice(0,8)
          })
       });
  }

  ngOnInit() { }
 
  // Get Colors
  public readonly colors: ColorFilter[] = [
      <ColorFilter>{color: 'white'},
      <ColorFilter>{color: 'red'},
      <ColorFilter>{color: 'green'},
      <ColorFilter>{color: 'yellow'},
      <ColorFilter>{color: 'blue'},
      <ColorFilter>{color: 'gray'},
      <ColorFilter>{color: 'orange'},
  ];
  
  // Get Tags
  public readonly tags: TagFilter[] = [
      <TagFilter>{brand: 'nike'},
      <TagFilter>{brand: 'puma'},
      <TagFilter>{brand: 'lifestyle'},
      <TagFilter>{brand: 'caprese'}
  ];
  
  // Animation Effect fadeIn
  public fadeIn() {
      this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
      this.animation = 'fadeOut';
  }

  // Initialize filetr Items
  public filterItems(): Product[] {
      return this.items.filter((item: Product) => {
          const Colors: boolean = this.colorFilters.reduce((prev, curr) => { // Match Color
              if (item.colors.includes(curr.color)) {
                return prev && true;
              } 
          }, true);
          const Tags: boolean = this.tagsFilters.reduce((prev, curr) => { // Match Tags
              if (item.tags.includes(curr)) {
                return prev && true;
              } 
          }, true);
          return Colors && Tags; // return true
      });

  }
  
  // Update tags filter
  public updateTagFilters(tags: any[]) {
      this.tagsFilters = tags;
      this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

  // Update color filter
  public updateColorFilters(colors: any[]) {
      this.colorFilters = colors;
      this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }
  
  // Update price filter
  public updatePriceFilters(price: any) {
      let items: any[] = [];
      this.products.filter((item: Product) => {
          if (item.price >= price[0] && item.price <= price[1] )  {            
             items.push(item); // push in array
          } 
      });
      this.items = items;
  }

  // Infinite scroll
  public onScroll() {
      this.lastKey = _.last(this.allItems)['id'];
      if (this.lastKey != _.last(this.items)['id']) {
         this.finished = false
      }  
      // If data is identical, stop making queries
      if (this.lastKey == _.last(this.items)['id']) {
         this.finished = true
      }
      if(this.products.length < this.allItems.length){  
         let len = this.products.length;
         for(var i = len; i < len+4; i++){
           if(this.allItems[i] == undefined) return true
             this.products.push(this.allItems[i]);
         }
      }
  }
  
  // sorting type ASC / DESC / A-Z / Z-A etc.
  public onChangeSorting(val) {
     this.sortByOrder = val;
     this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

}
