import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'

import { ListSubCategoriasPage } from './listsubcategorias.page'

describe('ListSubCategorias2Page', () => {
  let component: ListSubCategoriasPage
  let fixture: ComponentFixture<ListSubCategoriasPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubCategoriasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ListSubCategoriasPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
