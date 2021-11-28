import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router
import { HomePageRoutingModule } from './home-page-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
