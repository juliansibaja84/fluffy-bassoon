import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// Pipes
import { SomethingToStringPipe } from "./something-to-string.pipe";

@NgModule({
    declarations: [SomethingToStringPipe],
    imports: [CommonModule],
    exports: [SomethingToStringPipe]
})
export class PipesMain {
}
