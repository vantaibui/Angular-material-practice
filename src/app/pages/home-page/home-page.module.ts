import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Router
import { HomePageRoutingModule } from './home-page-routing.module';

// Directive
import { ActiveEffectDirective } from './directives/active-effect.directive';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ActiveEffectDirective],
  imports: [CommonModule, FormsModule, HomePageRoutingModule],
})
export class HomePageModule {}
