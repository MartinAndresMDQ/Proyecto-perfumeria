import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FashionRoutingModule } from './fashion-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from "ngx-bar-rating";
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
// Home components
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { ServicesComponent } from './home/services/services.component';
import { BlogComponent } from './home/blog/blog.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { LogoComponent } from './home/logo/logo.component';
// Products Components 
import { ProductComponent } from './product/product.component';
import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { CollectionNoSidebarComponent } from './product/collection/collection-no-sidebar/collection-no-sidebar.component';
import { ColorComponent } from './product/collection/filter/color/color.component';
import { BrandComponent } from './product/collection/filter/brand/brand.component';
import { PriceComponent } from './product/collection/filter/price/price.component';
import { ProductLeftSidebarComponent } from './product/product-details/product-left-sidebar/product-left-sidebar.component';
import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
import { ProductNoSidebarComponent } from './product/product-details/product-no-sidebar/product-no-sidebar.component';
import { ProductColLeftComponent } from './product/product-details/product-col-left/product-col-left.component';
import { ProductColRightComponent } from './product/product-details/product-col-right/product-col-right.component';
import { ProductColumnComponent } from './product/product-details/product-column/product-column.component';
import { ProductAccordianComponent } from './product/product-details/product-accordian/product-accordian.component';
import { ProductLeftImageComponent } from './product/product-details/product-left-image/product-left-image.component';
import { ProductRightImageComponent } from './product/product-details/product-right-image/product-right-image.component';
import { ProductVerticalTabComponent } from './product/product-details/product-vertical-tab/product-vertical-tab.component';
import { RelatedProductsComponent } from './product/product-details/related-products/related-products.component';
import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { QuickViewComponent } from './product/widgets/quick-view/quick-view.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { SearchComponent } from './product/search/search.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FashionRoutingModule,
    SharedModule,
    SlickCarouselModule,
    BarRatingModule,
    RangeSliderModule,
    InfiniteScrollModule,
    NgxPayPalModule
  ],
  declarations: [
    HomeComponent,
    SliderComponent,
    CollectionBannerComponent,
    ProductSliderComponent,
    ParallaxBannerComponent,
    ProductTabComponent,
    ServicesComponent,
    BlogComponent,
    InstagramComponent,
    LogoComponent,
    ProductComponent,
    CollectionLeftSidebarComponent,
    CollectionRightSidebarComponent,
    CollectionNoSidebarComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    ProductLeftSidebarComponent,
    ProductRightSidebarComponent,
    ProductNoSidebarComponent,
    ProductColLeftComponent,
    ProductColRightComponent,
    ProductColumnComponent,
    ProductAccordianComponent,
    ProductLeftImageComponent,
    ProductRightImageComponent,
    ProductVerticalTabComponent,
    RelatedProductsComponent,
    SidebarComponent,
    CategoriesComponent,
    QuickViewComponent,
    NewProductComponent,
    SearchComponent,
    ProductCompareComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent
  ]
})
export class FashionModule { }
