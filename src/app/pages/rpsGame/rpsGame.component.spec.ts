import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RpsGameComponent } from './rpsGame.component';
import { RpsGameService } from 'src/app/services/RpsGameService.service';

describe('rpsGameComponent', () => {
  let component: RpsGameComponent;
  let fixture: ComponentFixture<RpsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ RpsGameComponent ]
    })
    .compileComponents();    
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(RpsGameComponent);
    component = fixture.componentInstance;  
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should reset the game after it ends', () => {
    component.reset();
    expect(component.result).toBe('');
    expect(component.playerChoice).toEqual('wait');
    expect(component.pcChoice).toEqual('wait');
  });
  
});
