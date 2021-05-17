import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewCategoriesCbPage } from './overview-categories-cb.page';

describe('OverviewCategoriesCbPage', () => {
  let component: OverviewCategoriesCbPage;
  let fixture: ComponentFixture<OverviewCategoriesCbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCategoriesCbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewCategoriesCbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
