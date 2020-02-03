/**
 * Lift a computation from the `Observable` monad
 *
 * @since 0.6.6
 */
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from 'fp-ts/lib/HKT'
import { MonadTask, MonadTask1, MonadTask2, MonadTask2C, MonadTask3, MonadTask3C } from 'fp-ts/lib/MonadTask'
import { Observable } from 'rxjs'

/**
 * @since 0.6.6
 */
export interface MonadObservable<M> extends MonadTask<M> {
  readonly fromObservable: <A>(fa: Observable<A>) => HKT<M, A>
}

/**
 * @since 0.6.6
 */
export interface MonadObservable1<M extends URIS> extends MonadTask1<M> {
  readonly fromObservable: <A>(fa: Observable<A>) => Kind<M, A>
}

/**
 * @since 0.6.6
 */
export interface MonadObservable2<M extends URIS2> extends MonadTask2<M> {
  readonly fromObservable: <E, A>(fa: Observable<A>) => Kind2<M, E, A>
}

/**
 * @since 0.6.6
 */
export interface MonadObservable2C<M extends URIS2, E> extends MonadTask2C<M, E> {
  readonly fromObservable: <A>(fa: Observable<A>) => Kind2<M, E, A>
}

/**
 * @since 0.6.6
 */
export interface MonadObservable3<M extends URIS3> extends MonadTask3<M> {
  readonly fromObservable: <R, E, A>(fa: Observable<A>) => Kind3<M, R, E, A>
}

/**
 * @since 2.2.0
 */
export interface MonadObservable3C<M extends URIS3, E> extends MonadTask3C<M, E> {
  readonly fromObservable: <R, A>(fa: Observable<A>) => Kind3<M, R, E, A>
}
