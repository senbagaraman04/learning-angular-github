import { AbstractControl } from "@angular/forms";
import { debounce, distinctUntilChanged, first, interval, map } from "rxjs";

export class LengthValidator {
    static maxTextLength(length: string) {
        return (control: AbstractControl) => {
            const maxLenghtAllowed: number = +length;
            let value: string = control.value;
            if (value !== '' && value != null) {
                value = value.trim();
            }

            if (value != null && value.length > maxLenghtAllowed) {
                return true;
            }
            control.valueChanges.pipe(debounce(() => interval(500)),
                distinctUntilChanged(), map((result: boolean | null) => {

                    console.log(result)
                    return true;
                }),
                first()
            );
            return false;
        }
    }
}