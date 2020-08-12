import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewPartnersPage } from './overview-partners.page';

describe('OverviewPartnersPage', () => {
  let component: OverviewPartnersPage;
  let fixture: ComponentFixture<OverviewPartnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewPartnersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewPartnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
