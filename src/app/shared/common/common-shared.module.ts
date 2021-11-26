import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const CommonComponents = [HttpClientModule];

@NgModule({
  imports: [CommonComponents],
  exports: [CommonComponents],
})
export class CommonSharedModule {}
