import { NgModule } from '@angular/core';

import { JhipsterFirebaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterFirebaseSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterFirebaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterFirebaseSharedCommonModule {}
