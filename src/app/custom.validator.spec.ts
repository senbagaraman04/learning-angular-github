import { debounce, distinctUntilChanged, first, interval } from "rxjs";
import { LengthValidator } from "./custom.validator";
import { FormControl } from "@angular/forms";

describe('LengthValidator', () => {
    let control: AbstractControl;
  
    beforeEach(() => {
      control = new FormControl('');
    });
  
    it('should return true if the length of the value is greater than the max length allowed', () => {
      const validatorFn = LengthValidator.maxTextLength('5');
      control.setValue('123456');
      expect(validatorFn(control)).toBeTrue();
    });
  
    it('should return false if the length of the value is less than or equal to the max length allowed', () => {
      const validatorFn = LengthValidator.maxTextLength('5');
      control.setValue('12345');
      expect(validatorFn(control)).toBeFalse();
    });

    it('should call the valueChanges pipe with the correct parameters', () => {
        const validatorFn = LengthValidator.maxTextLength('5');
        const spy = spyOn(control.valueChanges, 'pipe').and.callThrough();
        control.setValue('123456');
        validatorFn(control);
        expect(spy).toHaveBeenCalledWith(
          debounce(() => interval(500)),
          distinctUntilChanged(),
          jasmine.any(Function),
          first()
        );
      });
      
  });
  